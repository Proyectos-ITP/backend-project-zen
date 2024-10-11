export const GET_CATEGORY_BY_ID_REPONSE_EXAMPLE = {
  id: 1,
  name: 'Category 1',
  description: 'Description for Category 1',
  createdAt: '2024-10-10T08:42:09.166Z',
  updatedAt: '2024-10-10T08:42:09.166Z',
  deletedAt: null,
};

export const GET_ALL_PROJECTS_RESPONSE_EXAMPLE = [
  {
    id: 1,
    title: 'Project Title',
    description: 'Project Description',
    createdAt: '2024-10-10T09:19:59.677Z',
    finishDate: '2022-01-01T12:00:00.000Z',
    updatedAt: '2024-10-10T09:19:59.677Z',
    deletedAt: null,
    projectCategories: [
      {
        id: 1,
        projectId: 1,
        categoryId: 1,
        createdAt: '2024-10-10T09:19:59.821Z',
        updatedAt: '2024-10-10T09:19:59.821Z',
        deletedAt: null,
        category: {
          id: 1,
          title: 'Electronics',
          description: 'Category description',
          createdAt: '2024-10-10T08:42:09.166Z',
          updatedAt: '2024-10-10T08:42:09.166Z',
          deletedAt: null,
        },
      },
      {
        id: 2,
        projectId: 1,
        categoryId: 2,
        createdAt: '2024-10-10T09:20:00.387Z',
        updatedAt: '2024-10-10T09:20:00.387Z',
        deletedAt: null,
        category: {
          id: 2,
          title: 'Academic',
          description: 'Category description',
          createdAt: '2024-10-10T08:43:12.591Z',
          updatedAt: '2024-10-10T08:43:12.591Z',
          deletedAt: null,
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Project Title 2',
    description: 'Project Description 2',
    createdAt: '2024-10-10T09:21:03.817Z',
    finishDate: '2022-01-01T12:00:00.000Z',
    updatedAt: '2024-10-10T09:21:03.817Z',
    deletedAt: null,
    projectCategories: [
      {
        id: 3,
        projectId: 2,
        categoryId: 1,
        createdAt: '2024-10-10T09:21:03.960Z',
        updatedAt: '2024-10-10T09:21:03.960Z',
        deletedAt: null,
        category: {
          id: 1,
          title: 'Electronics',
          description: 'Category description',
          createdAt: '2024-10-10T08:42:09.166Z',
          updatedAt: '2024-10-10T08:42:09.166Z',
          deletedAt: null,
        },
      },
      {
        id: 4,
        projectId: 2,
        categoryId: 2,
        createdAt: '2024-10-10T09:21:04.536Z',
        updatedAt: '2024-10-10T09:21:04.536Z',
        deletedAt: null,
        category: {
          id: 2,
          title: 'Academic',
          description: 'Category description',
          createdAt: '2024-10-10T08:43:12.591Z',
          updatedAt: '2024-10-10T08:43:12.591Z',
          deletedAt: null,
        },
      },
    ],
  },
];

export const GET_ONE_PROJECT_RESPONSE_EXAMPLE = {
  id: 1,
  title: 'Project Title',
  description: 'Project Description',
  createdAt: '2024-10-10T09:19:59.677Z',
  finishDate: '2022-01-01T12:00:00.000Z',
  updatedAt: '2024-10-10T09:19:59.677Z',
  deletedAt: null,
  projectCategories: [
    {
      id: 1,
      projectId: 1,
      categoryId: 1,
      createdAt: '2024-10-10T09:19:59.821Z',
      updatedAt: '2024-10-10T09:19:59.821Z',
      deletedAt: null,
      category: {
        id: 1,
        title: 'Electronics',
        description: 'Category description',
        createdAt: '2024-10-10T08:42:09.166Z',
        updatedAt: '2024-10-10T08:42:09.166Z',
        deletedAt: null,
      },
    },
    {
      id: 2,
      projectId: 1,
      categoryId: 2,
      createdAt: '2024-10-10T09:20:00.387Z',
      updatedAt: '2024-10-10T09:20:00.387Z',
      deletedAt: null,
      category: {
        id: 2,
        title: 'Academic',
        description: 'Category description',
        createdAt: '2024-10-10T08:43:12.591Z',
        updatedAt: '2024-10-10T08:43:12.591Z',
        deletedAt: null,
      },
    },
  ],
};

export const GET_RELATED_DATA_RESPONSE_EXAMPLE = {
  categories: [
    {
      id: 1,
      title: 'Electronics',
      description: 'Category description',
      createdAt: '2024-10-10T08:42:09.166Z',
      updatedAt: '2024-10-10T08:42:09.166Z',
      deletedAt: null,
    },
    {
      id: 2,
      title: 'Academic',
      description: 'Category description',
      createdAt: '2024-10-10T08:43:12.591Z',
      updatedAt: '2024-10-10T08:43:12.591Z',
      deletedAt: null,
    },
  ],
};