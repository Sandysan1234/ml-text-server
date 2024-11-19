const { load } = require('./service-text');

const getEmotionByText = async (request, h) => {
  const { text } = request.payload;

  try {
    const emotion = await load(text);

    return h.response({
      status: 'success',
      message: 'Prediksi berhasil',
      data: { emotion },
    }).code(200);
  } catch (error) {
    console.error(error);
    return h.response({
      status: 'error',
      message: 'Terjadi kesalahan pada prediksi',
    }).code(500);
  }
};

module.exports = { getEmotionByText };
