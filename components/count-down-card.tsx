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
    <div className="flex flex-col items-center justify-center w-fit p-6 bg-yellow-400 rounded-lg h-32">
      <h2 className="text-base font-medium mb-2">Hitung Mundur Acara</h2>
      <div className="w-full flex items-center justify-center gap-4">
        <div className="text-center w-14 rounded-lg p-1 bg-white">
          <span className="block -mb-2 text-lg font-semibold text-primary-color">{timeLeft.days}</span>
          <span className="text-xs font-normal text-black">Hari</span>
        </div>
        <div className="text-center w-14 rounded-lg p-1 bg-white">
          <span className="block -mb-2 text-lg font-semibold text-primary-color">{timeLeft.hours}</span>
          <span className="text-xs font-normal text-black">Jam</span>
        </div>
        <div className="text-center w-14 rounded-lg p-1 bg-white">
          <span className="block -mb-2 text-lg font-semibold text-primary-color">{timeLeft.minutes}</span>
          <span className="text-xs font-normal text-black">Menit</span>
        </div>
        <div className="text-center w-14 rounded-lg p-1 bg-white">
          <span className="block -mb-2 text-lg font-semibold text-primary-color">{timeLeft.seconds}</span>
          <span className="text-xs font-normal text-black">Detik</span>
        </div>
      </div>
      <p className="text-xs mt-2">
        Acara dimulai pada: {new Date(eventDate).toLocaleString()}
      </p>
    </div>
  );
};

export default CountdownCard;
