import { useState, useEffect } from "react";

interface CountdownCardProps {
  eventDate: string; 
}

const CountdownCard: React.FC<CountdownCardProps> = ({ eventDate }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const eventTime = new Date(eventDate);
      const difference = eventTime.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div className="flex flex-col items-center justify-center w-80 p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold mb-4">Hitung Mundur Acara</h2>
      <div className="w-full flex justify-between space-x-4">
        <div className="text-center">
          <span className="block text-3xl font-semibold">{timeLeft.days}</span>
          <span className="text-sm font-semibold text-gray-500">Hari</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl font-semibold">{timeLeft.hours}</span>
          <span className="text-sm font-semibold text-gray-500">Jam</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl font-semibold">{timeLeft.minutes}</span>
          <span className="text-sm font-semibold text-gray-500">Menit</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl font-semibold">{timeLeft.seconds}</span>
          <span className="text-sm font-semibold text-gray-500">Detik</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        Acara dimulai pada: {new Date(eventDate).toLocaleString()}
      </p>
    </div>
  );
};

export default CountdownCard;
