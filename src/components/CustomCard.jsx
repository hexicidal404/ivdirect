/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

function CustomCard({ title, price, content, buttonText, onButtonClick }) {
  const cloudinaryImageUrl =
    "https://res.cloudinary.com/dcgh3ljwk/image/upload/e_blur:725/c_scale,l_IVDirect_oed1qg,w_274,y_125/v1694215164/bag_npihlz.webp";

  return (
    <Card
      sx={{
        ":hover": {
          boxShadow: "0px 4px 6px rgba(25, 31, 35, 0.5)",
        },
        border: "1px solid #e1e9ef",
        margin: "0 auto",
        maxWidth: "432px",
        minWidth: "240px",
        background: "#ffffff",
        transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
        borderRadius: "12px",
      }}
    >
      <CardMedia
        sx={{
          height: 240,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${cloudinaryImageUrl})`,
        }}
        title="IV Bag"
      />
      <CardContent sx={{ padding: "24px" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", marginBottom: "8px" }}
        >
          {title}
        </Typography>

        <Typography
          color="textSecondary"
          sx={{ marginBottom: "16px", fontWeight: "500" }}
        >
          {price}
        </Typography>

        <Typography variant="body2">{content}</Typography>
      </CardContent>

      {buttonText && onButtonClick && (
        <CardActions sx={{ padding: "24px" }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={onButtonClick}
            sx={{
              backgroundColor: "white",
              ":hover": {
                backgroundColor: "#283891",
                color: "white", // You can choose any shade of blue or a custom color code.
              },
            }}
          >
            {buttonText}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

export default CustomCard;
