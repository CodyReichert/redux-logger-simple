
export default ({ getState }) => next => action => {

    // Don't log in production
    if (process.env.NODE_ENV !== 'development') {
        return next(action)
    }

    const previousState = getState()
    const result = next(action)
    const nextState = getState()

    console.groupCollapsed(
        `%c${action.type}`,
        "font-weight:bold;font-size:14;color:rgb(23, 162, 184)"
    )
    console.log("%cPrevious state: ", "font-weight:bold", previousState)
    console.log("%cAction: ", "font-weight:bold", action);
    console.log("%cNext state: ", "font-weight:bold", nextState)
    console.groupEnd()

    return result

}
