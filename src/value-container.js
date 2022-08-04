const valueContainer = element => ([
    () => element.value,
    (value) => element.value = value,
])

export default valueContainer;