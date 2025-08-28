
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"; 
// ⬆️ switched to @hello-pangea/dnd (modern fork, works with React 18+)

const initialClasses = [
  { id: "english", name: "English", color: "bg-green-500" },
  { id: "math", name: "Math", color: "bg-blue-500" },
  { id: "science", name: "Science", color: "bg-yellow-500" },
  { id: "history", name: "History", color: "bg-red-500" },
  { id: "pe", name: "PE", color: "bg-indigo-500" },
  { id: "music", name: "Music", color: "bg-pink-500" },
  { id: "geography", name: "Geography", color: "bg-gray-500" },
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const times = ["9AM", "11AM", "1PM", "2PM"];

export default function App() {
  const [classes] = useState(initialClasses);
  const [schedule, setSchedule] = useState(
    Object.fromEntries(
      days.map((d) => [d, Object.fromEntries(times.map((t) => [t, null]))])
    )
  );

  const onDragEnd = (result) => {
    const { destination, draggableId } = result;
    if (!destination) return;

    if (destination.droppableId.includes("-")) {
      const [day, time] = destination.droppableId.split("-");
      const selectedClass = classes.find((c) => c.id === draggableId);
      setSchedule((prev) => ({
        ...prev,
        [day]: { ...prev[day], [time]: selectedClass },
      }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow p-6 grid grid-cols-4 gap-6">
        <DragDropContext onDragEnd={onDragEnd}>
          {/* Available Classes */}
          <div>
            <h2 className="font-bold mb-4">Available Classes</h2>
            <Droppable droppableId="classes">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="space-y-2"
                >
                  {classes.map((c, index) => (
                    <Draggable key={c.id} draggableId={c.id} index={index}>
                      {(provided) => (
                        <div
                          className={`${c.color} text-white rounded-lg p-2`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {c.name}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          {/* Timetable */}
          <div className="col-span-3">
            <h2 className="font-bold mb-4">Curriculum Schedule</h2>
            <div className="grid grid-cols-6 gap-2">
              <div></div>
              {days.map((day) => (
                <div key={day} className="text-center font-semibold">
                  {day}
                </div>
              ))}
              {times.map((time) => (
                <React.Fragment key={time}>
                  <div key={time} className="font-semibold flex items-center">
                    {time}
                  </div>
                  {days.map((day) => (
                    <Droppable
                      droppableId={`${day}-${time}`}
                      key={`${day}-${time}`}
                    >
                      {(provided) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className="h-16 border rounded-lg flex items-center justify-center"
                        >
                          {schedule[day][time] && (
                            <div
                              className={`${schedule[day][time].color} text-white rounded-lg p-2`}
                            >
                              {schedule[day][time].name}
                            </div>
                          )}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </DragDropContext>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-10 mt-8">
        <p className="text-sm">
          📅 Draggable Timetable App — By Brenda @ 2025
        </p>
      </footer>
    </div>
  );
}




               