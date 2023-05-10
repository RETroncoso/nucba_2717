import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function Loader() {
  return (
    <Box sx={{ width: 300, margin: "-40px auto" }}>
      <Skeleton sx={{ height: 275, marginBottom: -5 }} animation="wave" />
      <Skeleton
        sx={{ width: 150, height: 60, margin: "0 auto" }}
        animation="wave"
      />
      <Skeleton sx={{ height: 60 }} animation="wave" />
      <Skeleton sx={{ height: 60 }} animation="wave" />
      <Skeleton sx={{ height: 60 }} animation="wave" />
      <Box sx={{ display: "flex", gap: 2 }}>
        <Skeleton sx={{ height: 60, width: 100 }} animation="wave" />
        <Skeleton sx={{ height: 60, width: 100 }} animation="wave" />
      </Box>
    </Box>
  );
}
