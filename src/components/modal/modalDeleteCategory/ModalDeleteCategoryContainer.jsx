import { connect } from "react-redux";
import { deleteCategorySuccess } from "../../../redux/category-reducer";
import { changeAllTaskCategory, deleteTaskCurrentCategory } from "../../../redux/todo-reducer";
import ModalDeleteCategory from "./ModalDeleteCategory";

const mapStateToProps = (state, ownProps) => {
    return {
        onClose: ownProps.onClose,
        userId: ownProps.userId,
        nameCategory: ownProps.nameCategory,
        categoryId: ownProps.categoryId
    }
}

const ModalDeleteCategoryContainer = connect(mapStateToProps, { deleteTaskCurrentCategory, changeAllTaskCategory, deleteCategorySuccess })(ModalDeleteCategory)

export default ModalDeleteCategoryContainer;