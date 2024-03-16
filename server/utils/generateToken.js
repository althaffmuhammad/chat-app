import JWT from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  const token = JWT.sign ({userId}, process.env.JWT_SECRET, {
    expiresIn: '15d',
  });

  res.cookie ('JWT', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV !== 'develop',
  });
};

export default generateTokenAndSetCookie;
