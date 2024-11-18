import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from '@mui/material/Stack';
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useTodo } from "../Hooks/useTodo";
import { Typography } from "@mui/material";

const Todos = () => {
  const { register, handleSubmit, errors, onSubmit, todos } = useTodo();

  return (
    <Box component="div">
      <Box
        component="form"
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label="Add Todo"
          variant="standard"
          fullWidth
          {...register("Todo", { required: "Enter Your Todo" })}
        />
        <Button variant="contained" type="submit">
          Add Todo
        </Button>
      </Box>
      {errors && <Typography variant='body1' sx={{ color: 'red' }}>Added Todo</Typography>}


      <List sx={{ maxWidth: 360, height: 250, overflowX: 'hidden', marginTop: 3 }}>
        {todos && todos.map((value?: string) => (
          <ListItem
            key={todos.length}
            disableGutters
            secondaryAction={
              <Stack direction="row" spacing={2}>
                <ModeEditIcon sx={{ cursor: 'pointer' }} />
                <DeleteIcon sx={{ cursor: 'pointer' }} />
              </Stack>
            }
          >
            <ListItemText primary={`${value}item`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Todos;
