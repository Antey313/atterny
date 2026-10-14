import { DAYS } from "../types.js";
import type { Lesson } from "../types.js";
import DayGroup from "../components/DayGroup";

const mockLessons: Lesson[] = [
  {
    id: "1",
    subject: "Управление проектами",
    teacher: "Буйницкий П.Е.",
    room: "40",
    day: "wednesday",
    startTime: "8:30",
    endTime: "10.10",
    task: "",
    taskDone: false,
  },
  {
    id: "2",
    subject: "Проектирование и дизайн",
    teacher: "Буйницкий П.Е.",
    room: "40",
    day: "wednesday",
    startTime: "10:20",
    endTime: "12:00",
    task: "",
    taskDone: false,
  },
  {
    id: "3",
    subject: "Разработка кода ",
    teacher: "Буйницкий П.Е.",
    room: "40",
    day: "wednesday",
    startTime: "13:00",
    endTime: "14:40",
    task: "Отправить код на GitHub",
    taskDone: false,
  },
];

export default function ScheduleScreen() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="bg-white border-b border-gray-100 px-4 py-4 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-gray-900">MySchedule</h1>
      </header>

      <main className="p-4">
        {DAYS.map((day) => (
          <DayGroup
            key={day.key}
            day={day.key}
            lessons={mockLessons.filter((l) => l.day === day.key)}
          />
        ))}
      </main>
    </div>
  );
}
