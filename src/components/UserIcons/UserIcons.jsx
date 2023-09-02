

export default function UserIcons( {student, user} ) {


    return (
        <h4 className="text-xl">
            <span className="tooltip">{student.name ? '🎓' : ''}<span className="text-sm tooltiptext">Student</span></span>
            <span className="tooltip">{student.premium ? '👑' : ''}<span className="text-sm tooltiptext">Premium</span></span>
            <span className="tooltip">{student._id === user._id ? '😎' : ''}<span className="text-sm tooltiptext">Yourself</span></span>
            <span className="tooltip"> {student.admin ? '⚙️' : ''}<span className="text-sm tooltiptext">Admin</span></span>
          </h4>
    )
}