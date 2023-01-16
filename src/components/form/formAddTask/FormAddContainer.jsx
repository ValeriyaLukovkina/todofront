import { connect } from "react-redux";
import { addTask } from "../../../redux/todo-reducer";
import FormAddTaks from "./FormAddTaks";

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.toDo.tasks,
        userId: state.auth.userId,
        initValues: ownProps.initValues,
        block: ownProps.block
    }
}

const FormAddTaskContainer = connect(mapStateToProps, { addTask })(FormAddTaks)

export default FormAddTaskContainer;