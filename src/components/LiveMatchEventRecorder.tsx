'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import '../assets/styles/recording.css'

type Props = {
    onBack(): void;
}

const LiveAudioRecorder = ({ onBack }: Props) => {
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [duration, setDuration] = useState<number>(0);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const intervalRef = useRef<number | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        startRecording();
    }, []);

    const startRecording = async () => {
        setIsRecording(true);
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        const chunks: Blob[] = [];
        mediaRecorder.ondataavailable = e => chunks.push(e.data);
        mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        setAudioBlob(blob);
        };
        mediaRecorder.start();

        intervalRef.current = window.setInterval(drawWaveform, 100); // Update waveform every 100ms

        // Update audio duration every second
        const timer = setInterval(() => {
        setDuration(prevDuration => prevDuration + 1);
        }, 1000);
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
          mediaRecorderRef.current.stop();
          setIsRecording(false);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }
    };

// Visualize audio waveform on canvas
const drawWaveform = () => {
    if (!canvasRef.current || !audioBlob) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    const audioContext = new AudioContext();
    const reader = new FileReader();
    reader.onload = async () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      const audioData = audioBuffer.getChannelData(0);
      const bufferLength = audioData.length;
      const sliceWidth = WIDTH * 1.0 / bufferLength;
      let x = 0;

      ctx.lineWidth = 2;
      ctx.strokeStyle = '#000';
      ctx.beginPath();

      for(let i = 0; i < bufferLength; i++) {
        const v = audioData[i] * HEIGHT / 2;
        const y = HEIGHT / 2 + v;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        x += sliceWidth;
      }
      ctx.lineTo(canvas.width, canvas.height/2);
      ctx.stroke();
    };
    reader.readAsArrayBuffer(audioBlob);
  };

    return (
        <section className="flex flex-col w-full gap-6">
            <div className="flex w-full items-start">
                <button onClick={onBack}>
                    <Image src="/caret-left-ic.svg" alt="" width={24} height={24} />
                </button>
            </div>
            <div className="recording-card">
                <div className="flex gap-2 font-roboto text-base">
                    <Image src="/record-ic.svg" alt="" width={24} height={24} />
                    Recording
                </div>
                <span className="text-sm color-text-AAAAAA">
                    {duration}
                </span>
                <canvas ref={canvasRef} width="300" height="100" />
            </div>

            <button onClick={() => stopRecording()}>
                <Image src="/stop-recording.svg" alt="" width={48} height={48} />
            </button>
        </section>
    )
}

export default LiveAudioRecorder;