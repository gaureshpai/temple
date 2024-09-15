'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface VideoSnippet {
  title: string;
  publishedAt: string;
  resourceId?: {
    videoId: string;
  };
  liveBroadcastContent: string;
}

interface VideoResponse {
  items: {
    snippet: VideoSnippet;
  }[];
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID ;

const LiveEmbeddedYt: React.FC = () => {
  const [liveVideo, setLiveVideo] = useState<VideoSnippet | null>(null);
  const [lastLiveVideo, setLastLiveVideo] = useState<VideoSnippet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const playlistResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels`,
          {
            params: {
              part: 'contentDetails',
              id: CHANNEL_ID,
              key: API_KEY
            }
          }
        );

        const uploadsPlaylistId = playlistResponse.data.items[0].contentDetails.relatedPlaylists.uploads;

        const videosResponse = await axios.get<VideoResponse>(
          `https://www.googleapis.com/youtube/v3/playlistItems`,
          {
            params: {
              part: 'snippet',
              playlistId: uploadsPlaylistId,
              maxResults: 1,
              key: API_KEY
            }
          }
        );

        const latestVideo = videosResponse.data.items[0]?.snippet;

        if (latestVideo?.liveBroadcastContent === 'live') {
          setLiveVideo(latestVideo);
        } else {
          setLiveVideo(null);
        }

        const allVideosResponse = await axios.get<VideoResponse>(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: 'snippet',
              channelId: CHANNEL_ID,
              eventType: 'completed',
              type: 'video',
              order: 'date',
              maxResults: 1,
              key: API_KEY
            }
          }
        );

        const lastLiveVideo = allVideosResponse.data.items[0]?.snippet;
        setLastLiveVideo(lastLiveVideo || null);

      } catch (err) {
        setError('Failed to fetch video information');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center bg-white p-8" id='LiveEmbeddedYt'>
      <div className="w-full max-w-7xl bg-white p-6 rounded-lg shadow-lg">
        {loading ? (
          <div className="text-lg font-semibold text-gray-700">Loading...</div>
        ) : error ? (
          <div className="text-lg font-semibold text-red-600">{error}</div>
        ) : (
          <div className="flex flex-col items-center">
            {liveVideo ? (
              <>
                <iframe
                  width="100%"
                  height="450"
                  src={`https://www.youtube.com/embed/${liveVideo.resourceId?.videoId}`}
                  title={liveVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h2 className="text-2xl font-bold m-4 text-black">Live Now: {liveVideo.title}</h2>
                <p className="mb-6 text-gray-600">Broadcasting since: {new Date(liveVideo.publishedAt).toLocaleString()}</p>
              </>
            ) : (
              <>
                {lastLiveVideo ? (
                  <>
                    <iframe
                      width="100%"
                      height="450"
                      src={`https://www.youtube.com/embed/${lastLiveVideo.resourceId?.videoId}`}
                      title={lastLiveVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <h2 className="text-2xl font-bold m-4 text-black">Last Live Video: {lastLiveVideo.title}</h2>
                    <p className="mb-6 text-gray-600">Published at: {new Date(lastLiveVideo.publishedAt).toLocaleString()}</p>
                  </>
                ) : (
                  <div className="text-center text-gray-600">No live or past live video available.</div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveEmbeddedYt;