import ProfileIcon from "@/icons/Profile";
import IconButton from "../icon-button/icon-button";

export default function ProfileButton() {
  return (
    <IconButton size="sm" aria-label="Meu perfil">
      <ProfileIcon />
    </IconButton>
  );
}
