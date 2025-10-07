export const TaskStatusEnum = {
    pending: 'pending',
    done: 'done',
} as const

export type TaskStatus = typeof TaskStatusEnum[keyof typeof TaskStatusEnum]