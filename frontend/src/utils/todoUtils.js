export const mapStatus = (status) => {
    switch (status) {
        case "OPEN":
            return "open"
        case "IN_PROGRESS":
            return "in progress"
        case "DONE":
            return "done"
        default:
            return "that should never appear"
    }
}