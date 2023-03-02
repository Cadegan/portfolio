import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Variants() {
  return (
    <Stack spacing={5} className="cards__item">
      <Skeleton variant="text" animation="wave" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={210}
        height={60}
      />
      <Skeleton variant="rounded" animation="wave" width={210} height={60} />
    </Stack>
  );
}
