export default [{"prefix":"rneAvatar","imports":["Avatar"],"body":"<Avatar title=\"$1\" size={\"${2|number,small,medium,large,xlarge|}\"} ${3:rounded} $0 />;","description":"Avatar","docKey":"avatar"},{"prefix":"rneAvatarBadge","imports":["Avatar","Badge"],"body":"<>\n    <Avatar source={{\n    uri: \"$2\"\n  }} size={\"${3|number,small,medium,large,xlarge|}\"} $0 />\n    <Badge status={\"${4|primary,success,warning,error|}\"} containerStyle={{\n    position: \"absolute\",\n    top: -4,\n    right: -4\n  }} $1 />\n  </>;","description":"Avatar with Badge","docKey":"badge"},{"prefix":"rneBadge","imports":["Badge"],"body":"<Badge status={\"${1|primary,success,warning,error|}\"} value=\"$2\" $0 />;","description":"Badge","docKey":"badge"},{"prefix":"rneBadgeMini","imports":["Badge"],"body":"<Badge status={\"${1|primary,success,warning,error|}\"} $0 />;","description":"Mini Badge","docKey":"badge"},{"prefix":"rneBottomSheet","imports":["BottomSheet"],"body":"<BottomSheet ${1:isVisible} onBackdropPress={$2} containerStyle={{\n  backgroundColor: \"$3\"\n}} $0>\n    $4\n  </BottomSheet>;","description":"Bottom Sheet","docKey":"bottomsheet"},{"prefix":"rneButton","imports":["Button"],"body":"<Button onPress={$1} title={$2} $0 />;","description":"Button","docKey":"button"},{"prefix":"rneButtonGroup","imports":["ButtonGroup"],"body":"<ButtonGroup onPress={$1} selectedIndex={$2} button={$3} $0 />;","description":"","docKey":"button_group"},{"prefix":"rneButtonIcon","imports":["Button"],"body":"<Button iconPosition={\"${1|left,right,top,bottom|}\"} onPress={$2} icon={$3} title={$4} $0 />;","description":"","docKey":"button"}]