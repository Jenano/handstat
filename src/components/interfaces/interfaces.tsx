export interface MatchStatistics {
  wins: number;
  draws: number;
  loses: number;
  goalsFor: number;
  goalsAgainst: number;
}

export interface PlayedMatchesListProps {
  matches: PlayedMatchProps[];
  onClick: (idZapasu: string) => void;
}

export interface AllPlayersDataprops {
  sixMetersGoals: number; // 6m goals
  sixMetersShots: number; // 6m shots
  sevenMetersGoals: number; // 7m goals
  sevenMetersShots: number; // 7m shots
  nineMetersGoals: number; // 9m goals
  nineMetersShots: number; // 9m shots
  wingGoals: number; // Wing goals
  wingShots: number; // Wing shots
  breakGoals: number; // Fast break goals
  breakShots: number; // Fast break shots
  technicalfaluts?: number;
  twoMinSusp: number;
  header?: string;
  playerDetail?: boolean;
  matches?: number;
  differenceOffence?: number;
  differenceDefence?: number;
}

export interface PlayerData {
  idPlayer: string;
  name: string; // Player name
  position: string; // Player position
  playedMatches: number;
  goals: number; // Goals scored
  dresNumber: number;
  shots: number; // Shots taken
  assists: number; // Assists
  accuracy: number; // Shot accuracy
  profileImg: string; // Player profile image URL

  // Additional attributes with Goals and Shots
  sixMetersGoals: number; // 6m goals
  sixMetersShots: number; // 6m shots
  sevenMetersGoals: number; // 7m goals
  sevenMetersShots: number; // 7m shots
  nineMetersGoals: number; // 9m goals
  nineMetersShots: number; // 9m shots
  wingGoals: number; // Wing goals
  wingShots: number; // Wing shots
  breakGoals: number; // Fast break goals
  breakShots: number; // Fast break shots

  // Differences
  differenceOffence: number; // Positive difference
  differenceDefence: number; // Negative difference

  // Card-related stats
  yellowCards: number; // Yellow cards
  twoMinutes: number;
  redCards: number;
}

export interface PlayerStatTableProps {
  playerData: PlayerData[];
  goalkeeper: boolean;
  onClick: (idHrace: string) => void;
}

export interface PopUpProps {
  open: boolean;
  heading: string;
  children?: React.ReactNode;
  onClick: () => void;
}

export interface BarItemProps {
  to: string;
  label: string;
  icon: string;
}

export interface BTNSelectProps {
  active: boolean;
  onClick: (label: string) => void;
  label: string;
}

export interface DatePickerProps {
  onSelect: (value: Date) => void;
}

export interface DetailHeaderProps {
  heading: string;
  onClick: () => void;
}

export interface DropdownPickerProps {
  defaultValue: string; // Default selected value
  options: string[]; // Array of options
  onSelect: (value: string) => void; // Callback to pass the selected value
  color?: string; // Optional color for the dropdown text
  margin?: string;
  signedUser?: string;
}

export interface HeaderProps {
  value: string;
}

export interface OneStatDifrProps {
  rating: number;
}

export interface OneStatSlashProps {
  goals: number;
  shots: number;
}

export interface PlayedMatchProps {
  date: string;
  idZapasu: string;
  myTeam: string;
  awayTeam: string;
  myTeamScore: number;
  awayteamScore: number;
  myLogo: string;
  awayLogo: string;
  homeMatch: boolean;
  shadow?: string;
  notes?: string;
  playerDetail?: boolean;
  golas?: number;
  differenceStat?: number;
}

export interface PlayerProfileProps {
  profileImg: string;
  name: string;
}

export interface StatItemProps {
  label: string;
  value: string | number;
  color: string;
  bold?: boolean;
}

export interface MatchDetailProps {
  playedMatchData: PlayedMatchProps;
}

export interface PlayerDetailProps {
  allPlayersDataprops: AllPlayersDataprops;
}
