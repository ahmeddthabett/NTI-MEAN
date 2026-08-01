enum ApplicationStatus {
  Pending = "PENDING",
  Accepted = "ACCEPTED",
  Rejected = "REJECTED"
}

type PlayerStat = [string, number];

interface Player {
  readonly id: number;
  name: string;
  age: number;
  position: string;
  preferredFoot: "Left" | "Right" | "Both";
  isAvailable: boolean;
  stats?: PlayerStat[];
}

interface Academy {
  readonly id: string;
  name: string;
  location: string;
  contactNumber?: string;
}

interface TrialApplication {
  readonly applicationId: string;
  player: Player;
  academy: Academy;
  status: ApplicationStatus;
  trialDate: string;
}

function createApplication(player: Player, academy: Academy, date: string): TrialApplication {
  return {
    applicationId: `APP-${player.id}-${Date.now()}`,
    player: player,
    academy: academy,
    status: ApplicationStatus.Pending,
    trialDate: date
  };
}

function getAvailablePlayers(players: Player[]): Player[] {
  return players.filter(player => player.isAvailable);
}

const omar: Player = {
  id: 1,
  name: "Omar",
  age: 18,
  position: "Midfielder",
  preferredFoot: "Right",
  isAvailable: true,
  stats: [["Assists", 15], ["Goals", 5]]
};

const elGounaAcademy: Academy = {
  id: "ACAD-001",
  name: "El-Gouna Academy",
  location: "Red Sea"
};

const newApplication = createApplication(omar, elGounaAcademy, "2026-08-15");
const activePlayers = getAvailablePlayers([omar]);

console.log(newApplication);
console.log(activePlayers);