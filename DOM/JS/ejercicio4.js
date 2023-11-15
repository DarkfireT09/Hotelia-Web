const responses = [
    {
        name: "Name1",
        last: "LastName1",
        course: "Course1"
    },
    {
        name: "Name3",
        last: "LastName3",
        course: "Course3"
    },
    {
        name: "Name2",
        last: "LastName2",
        course: "Course2"
    }
]

form = document.getElementById("courses")

form.addEventListener(
    "submit",
    (e) => {
        const data = Object.fromEntries(new FormData(e.target))

        if (responses.some(e => {
            return e.name === data.name && e.last === data.last && e.course === data.course
        })) {
            console.log("la respuesta es correcta")
        } else {
            console.log("la respuesta es incorrecta")
        }
        form.reset()
        e.preventDefault()
    }
)