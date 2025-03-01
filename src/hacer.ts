interface Tasks {
  id?: string;
  title: string;
  description: string;
  complete?: boolean;
}

class List {
  tasks: Tasks[] = [];

  addTask(id: string, title: string, description: string): void {
    const newTask: Tasks = {
      id,
      title,
      description,
      complete: false,
    };

    this.tasks.push(newTask);
  }

  editButton(task: Tasks, newTitle: string, newDescription: string) {
    return {
      ...task,
      title: newTitle,
      description: newDescription,
    };
  }

  deleteButton(id: string) {
    const taskIndex = this.tasks.findIndex((i) => i.id === id);

    if (taskIndex !== -1) {
      const deleteTesk = this.tasks.splice(taskIndex, 1);
    }
  }

  listTasks() {
    if (this.tasks.length === 0) {
      console.log("No hay tareas en la lista");
    } else {
      console.log("Lista de Tareas");
    }
  }
}

const listar = new List();

console.log(
  listar.addTask("1ab2c3", "Mi tarea", "Tengo que volver a estudiar los cursos")
);

console.log(listar.tasks);

console.log(listar.editButton(listar.tasks[0], "otra cosa", "hay que repasar"));

console.log(listar.listTasks());
