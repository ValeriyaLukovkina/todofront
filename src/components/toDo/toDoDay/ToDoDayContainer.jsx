import { connect } from "react-redux";
import { changeMeanSort } from "../../../redux/sort-reducer";
import { addSubtaskPrevious, deleteSubtask, deleteTask, isAllSubtaskComplete, isSubtaskComplete, isTaskComplete } from "../../../redux/todo-reducer";
import ToDoDay from "./ToDoDay";

const mapStateToProps = (state) => {
    return {
        tasks: state.toDo.tasks,
        dateBlock: state.sort.dateBlock,
    }
}

const ToDoDayContainer = connect(mapStateToProps, { addSubtaskPrevious, deleteTask, deleteSubtask, isTaskComplete, isAllSubtaskComplete, isSubtaskComplete, changeMeanSort })(ToDoDay)

export default ToDoDayContainer;