import toDoReducer, { addTaskSuccess, deleteTaskSuccess } from "./todo-reducer";

let state = {
    tasks: [
        {
            "_id": 1,
            "nameTask": "Give dog a bath",
            "complete": true,
            "date": null,
            "time": null,
            "category": "work",
            "subtask": [
              {
                "_id": 1,
                "name": "qwe",
                "complete": false
              },
              {
                "id": 2,
                "name": "qwe",
                "complete": false
              }
            ]
          },
          {
            "_id": 2,
            "nameTask": "Do laundry",
            "complete": true,
            "date": null,
            "time": null,
            "category": "work",
            "subtask": []
          },
          {
            "_id": 3,
            "nameTask": "Vacuum floor",
            "complete": false,
            "date": null,
            "time": null,
            "category": "work",
            "subtask": []
          },
    ],
};

test('new task should be added', () => {
    let action = addTaskSuccess({
      "_id": 4,
      "nameTask": "Do ",
      "complete": true,
      "date": null,
      "time": null,
      "category": "work",
      "subtask": []
    });
    let newState = toDoReducer(state, action);

    expect(newState.tasks.length).toBe(4);
});

test('after deleting length of tasks should be decrement', () => {
    let action = deleteTaskSuccess(1);
    let newState = toDoReducer(state, action);

    expect(newState.tasks.length).toBe(2);
});

test('after deleting length should not be decrement if id is incorrecting', () => {
    let action = deleteTaskSuccess(1000);
    let newState = toDoReducer(state, action);

    expect(newState.tasks.length).toBe(3);
});