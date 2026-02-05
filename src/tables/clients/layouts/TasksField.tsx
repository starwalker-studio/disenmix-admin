import { Typography } from "@mui/material";
import { TaskModal } from "./TaskModal";
import { useTaskField } from "../../../hooks/useTaskField";
import { CLIENT_STYLE } from "../../../styles/client/client-style";

export const TasksField = () => {
  const { handleSaveTask, open, setOpen, record, saving } = useTaskField();
  if (!record) return null;
  return (
    <>
      <Typography
        title={record.tasks ?? ""}
        sx={record.tasks ? CLIENT_STYLE.TASK_FIELD : CLIENT_STYLE.TASK_EMPTY}
        onClick={() => setOpen(true)}
      >
        {record.tasks ? "Tareas" : "Agregar tarea"}
      </Typography>
      <TaskModal
        key={record.id + String(record.tasks)}
        open={open}
        onClose={() => setOpen(false)}
        record={record}
        onSave={handleSaveTask}
        saving={saving}
      />
    </>
  );
};
