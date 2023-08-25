

export default function TeachersDisplay ( {teachers} ) {


    return (
        <>
        {teachers.map((teacher, idx) => (
        <div className="bg-fourth w-[200px] flex flex-col justify-center items-center p-5 rounded-2xl ">

            <div className="rounded-2xl overflow-hidden w-40">
                <img src={teacher.image} className="w-40" alt="teacher" />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-center">{teacher.name}</h3>
            <h4 className="m-2 text-md font-semibold text-center">{teacher.subject.name}</h4>

        </div>
        ))}
        </>
    )
}