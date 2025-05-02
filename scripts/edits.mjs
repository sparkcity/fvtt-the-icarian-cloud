Hooks.once("init", () => {
  //adding new skills

  CONFIG.DND5E.skills.veh = {
    label: "Piloting",
    ability: "dex",
    fullKey: "piloting",
    icon: "",
  };

  CONFIG.DND5E.skills.hrd = {
    label: "Hardware",
    ability: "int",
    fullKey: "hardware",
    icon: "",
  };

  CONFIG.DND5E.skills.sft = {
    label: "Software",
    ability: "int",
    fullKey: "software",
    icon: "",
  };

});
