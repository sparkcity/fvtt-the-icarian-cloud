Hooks.once("init", () => {
  //adding new skills
  CONFIG.DND5E.skills.arc = {
    label: "Psionics",
    ability: "int",
    fullKey: "psionics",
    icon: "",
  };

  CONFIG.DND5E.skills.veh = {
    label: "Vehicle Handling",
    ability: "dex",
    fullKey: "vehicle handling",
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

  delete CONFIG.DND5E.skills.rel;
});
