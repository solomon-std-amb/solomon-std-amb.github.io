export interface RoadmapDBEntry {
	date1: Date
	date2?: Date
	title: string
}

export const Roadmap: RoadmapDBEntry[] = [{
	date1: new Date(2023, 6, 29),
	title: "Completed event"
},
{
	date1: new Date(Date.now() + 86400000 * 3),
	date2: new Date(Date.now() + 86400000 * 12),
	title: "Upcoming event"
},
{
	date1: new Date(2024, 6, 1),
	date2: new Date(2024, 7, 1),
	title: "Upcoming event (Far)"
}];