import cors from "cors";

export const corsConfig = () => {
  const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  };

  return cors(corsOptions);
};
