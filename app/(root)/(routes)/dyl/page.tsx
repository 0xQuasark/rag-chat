"use client";

import React, { useState, useEffect } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const DYL = () => {
  const [work, setWork] = useState(() => Number(localStorage.getItem('work')) || 3);
  const [play, setPlay] = useState(() => Number(localStorage.getItem('play')) || 3);
  const [love, setLove] = useState(() => Number(localStorage.getItem('love')) || 3);
  const [health, setHealth] = useState(() => Number(localStorage.getItem('health')) || 3);


  useEffect(() => {
    localStorage.setItem('work', work.toString());
    localStorage.setItem('play', play.toString());
    localStorage.setItem('love', love.toString());
    localStorage.setItem('health', health.toString());
  }, [work, play, love, health]);

  return (
    <main className="w-full max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Card>
        <CardHeader className="pb-5">
          <CardTitle className="text-lg font-semibold">DYL Dashboard</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Adjust your Work, Play, Love, and Health levels.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Work Slider */}
          <div className="flex items-center justify-between">
            <Label htmlFor="work-slider">Work 💼</Label>
            <div className="flex items-center w-2/3">
            <input
              className="mr-2"
              id="work-slider"
              max="100"
              min="0"
              name="work"
              step="5"
              type="range"
              value={work}
              onChange={(e) => setWork(Number(e.target.value))}
              style={{
                background: 'green'
              }}
            />
            <span>{work}</span>
            </div>
          </div>
          {/* Play Slider */}
          <div className="flex items-center justify-between">
            <Label htmlFor="play-slider">Play ⛹️‍♂️</Label>
            <div className="flex items-center w-2/3">
              <input
                className="mr-2"
                id="play-slider"
                max="100"
                min="0"
                step="5"
                type="range"
                value={play}
                onChange={(e) => setPlay(Number(e.target.value))}
              />
              <span>{play}</span>
            </div>
          </div>
          {/* Love Slider */}
          <div className="flex items-center justify-between">
            <Label htmlFor="love-slider">Love ❤️</Label>
            <div className="flex items-center w-2/3">
              <input
                className="mr-2"
                id="love-slider"
                max="100"
                min="0"
                step="5"
                type="range"
                value={love}
                onChange={(e) => setLove(Number(e.target.value))}
              />
              <span>{love}</span>
            </div>
          </div>
          {/* Health Slider */}
          <div className="flex items-center justify-between">
            <Label htmlFor="health-slider">Health 🏥</Label>
            <div className="flex items-center w-2/3">
              <input
                className="mr-2"
                id="health-slider"
                max="100"
                min="0"
                step="5"
                type="range"
                value={health}
                onChange={(e) => setHealth(Number(e.target.value))}
              />
              <span>{health}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default DYL;
