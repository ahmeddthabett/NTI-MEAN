"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApplicationStatus;
(function (ApplicationStatus) {
    ApplicationStatus["Pending"] = "PENDING";
    ApplicationStatus["Accepted"] = "ACCEPTED";
    ApplicationStatus["Rejected"] = "REJECTED";
})(ApplicationStatus || (ApplicationStatus = {}));
function createApplication(player, academy, date) {
    return {
        applicationId: `APP-${player.id}-${Date.now()}`,
        player: player,
        academy: academy,
        status: ApplicationStatus.Pending,
        trialDate: date
    };
}
function getAvailablePlayers(players) {
    return players.filter(player => player.isAvailable);
}
const omar = {
    id: 1,
    name: "Omar",
    age: 18,
    position: "Midfielder",
    preferredFoot: "Right",
    isAvailable: true,
    stats: [["Assists", 15], ["Goals", 5]]
};
const elGounaAcademy = {
    id: "ACAD-001",
    name: "El-Gouna Academy",
    location: "Red Sea"
};
const newApplication = createApplication(omar, elGounaAcademy, "2026-08-15");
const activePlayers = getAvailablePlayers([omar]);
console.log(newApplication);
console.log(activePlayers);
//# sourceMappingURL=index.js.map