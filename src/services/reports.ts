import { api } from "./api";

export async function getTrainingSummary(params: {
  team_id: string;
  start_date: string;
  end_date: string;
}) {
  const { data } = await api.get("/reports/trainings/summary", { params });
  return data;
}
