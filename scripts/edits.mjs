Hooks.once("init", () => {
  //adding new skills
  CONFIG.DND5E.skills.psi = {
    label: "Psionics",
    ability: "int",
    fullKey: "psionics",
    icon: "",
  };

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

  CONFIG.DND5E.skills.cul = {
    label: "Culture",
    ability: "wis",
    fullKey: "culture",
    icon: "",
  };

  //remove arcana and religion skills
  delete CONFIG.DND5E.skills.rel;
  delete CONFIG.DND5E.skills.arc;
});
