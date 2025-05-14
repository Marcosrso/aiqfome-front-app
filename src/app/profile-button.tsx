import ProfileIcon from "@/icons/Profile";
import IconButton from "@/components/button-icon/button-icon";

export default function ProfileButton() {
  return (
    <IconButton size="sm" aria-label="Meu perfil">
      <ProfileIcon />
    </IconButton>
  );
}
