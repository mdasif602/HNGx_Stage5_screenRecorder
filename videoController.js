const Video = require('./model');

// Create a new video
exports.createVideo = async (req, res) => {
  try {
    const { title, description, videoUrl } = req.body;
    const video = new Video({ title, description, videoUrl });
    await video.save();
    res.status(201).json(video);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all videos
exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a video by ID
exports.getVideoById = async (req, res) => {
  const videoId = req.params.id;

  try {
    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.status(200).json(video);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
