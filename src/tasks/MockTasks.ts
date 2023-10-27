import { Task } from './Task';

export const MockTasks = [
  new Task({
    id: 1,
    name: 'Button UI fixes',
    description: 'Ullam occaecati libero laudantium nihil voluptas omnis.',
    assignee: 'Kaia',
    contractTypeId: 3,
    startDate: '2023-11-24T22:39:41.473Z',
    endDate: '2023-12-01T22:39:41.473Z',
    status: 'TO DO',
  }),
  new Task({
    id: 2,
    name: 'Database access',
    description: 'Exercitationem nulla ut ipsam vero quasi enim quos doloribus voluptatibus.',
    assignee: 'Kaia',
    startDate: '2023-10-26T21:21:31.419Z',
    endDate: '2023-11-29T22:39:41.473Z',
    status: 'IN PROGRESS',
  }),
  new Task({
    id: 3,
    name: 'Remove extra padding',
    description:
      'Re-contextualized dynamic moratorium. Aut nulla soluta numquam qui dolor architecto et facere dolores.',
    assignee: 'Kaia',
    startDate: '2023-09-16T18:24:01.706Z',
    endDate: '2023-09-30T22:39:41.473Z',
    status: 'DONE'
  }),
  new Task({
    id: 4,
    name: 'Make images clickable',
    description:
      'Perferendis libero qui iusto et ullam cum sint molestias vel.',
    assignee: 'Kaia',
    startDate: '2023-10-26T01:10:42.344Z',
    endDate: '2023-11-29T22:39:41.473Z',
    status: 'IN PROGRESS'
  }),
  new Task({
    id: 5,
    name: 'Help with migrations',
    description:
      'Qui quod praesentium accusamus eos hic non error modi et.',
    assignee: 'Kaia',
    startDate: '2023-10-30T21:46:47.944Z',
    endDate: '2023-11-21T22:39:41.473Z',
    status: 'DONE'
  }),
  new Task({
    id: 6,
    name: 'Mobile first',
    description:
      'Rem consequatur laborum explicabo sint odit et illo voluptas expedita.',
    assignee: 'Kaia',
    startDate: '2023-11-23T21:27:25.035Z',
    endDate: '2023-12-23T21:27:25.035Z',
    status: 'TO DO'
  }),
];
