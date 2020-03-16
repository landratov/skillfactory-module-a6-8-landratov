let currentProgress = 0;

function moveProgress(percent) {
    if (currentProgress + percent <= 100) {
        $(".progress-bar").css("width", currentProgress + percent + "%").attr("aria-valuenow", currentProgress + percent);
        currentProgress = currentProgress + percent;
    } else {
        $(".progress-bar").css("width", "100%").attr("aria-valuenow", "100");
        currentProgress = 100;
    }
    
    renderProgress();
}

function progressPlusOne() {
    moveProgress(1);
}

function progressPlusThree() {
    moveProgress(3);
}

function progressPlusSeven() {
    moveProgress(7);
}

function reset() {
    currentProgress = 0;
    $(".progress-bar").css("width", "0%").attr("aria-valuenow", "0");
    renderProgress();
}

function renderProgress() {
    $("h3").html("Current progress: " + currentProgress + "%");
}

function init() {
    $("button.plus-1").click(progressPlusOne);
    $("button.plus-3").click(progressPlusThree);
    $("button.plus-7").click(progressPlusSeven);
    $("button.reset").click(reset);
    renderProgress();
}

$(document).ready(init);