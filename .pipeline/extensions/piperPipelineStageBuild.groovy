def call(Map parameters) {

    //parameters.originalStage() // Runs the build stage with built-in linters

    mtaBuild(
        script: parameters.script,
    )

    recordIssues blameDisabled: true,
        enabledForFailure: true,
        aggregatingResults: false,
        tool: checkStyle()
}

return this
