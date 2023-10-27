enum TaskStatus {
  toDo = 'TO DO', 
  inProgress = 'IN PROGRESS',
  done = 'DONE'
}

export class Task {
  id: number | undefined;
  name: string = '';
  description: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  assignee: string = '';
  status: TaskStatus = TaskStatus.toDo;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.description) this.description = initializer.description;
    if (initializer.startDate) this.startDate = new Date(initializer.startDate);
    if (initializer.endDate) this.endDate = new Date(initializer.endDate);
    if (initializer.assignee) this.assignee = initializer.assignee;
    if (initializer.status) this.status = initializer.status;
  }
}
