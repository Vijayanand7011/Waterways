function filterDropdowns() {
    var crop_list = document.getElementById("crop_list").value;
    var growth_stage = document.getElementById("growth_stage");
    var soil_type_list = document.getElementById("soil_type_list");

    // Clear both the second and third dropdowns
    growth_stage.innerHTML = "";
    soil_type_list.innerHTML = "";

    var growth_stage = [];
    var soil_type_list = [];

    // Based on the first dropdown selection, add relevant options to the second and third dropdowns
    if (crop_list === "banana") {
        growth_stage = [
            { value: "Seedling", text: "Seedling" },
            { value: "Vegetative", text: "Vegetative" },
            { value: "Flowering", text: "Flowering" },
            { value: "Maturity", text: "Maturity" }
            
        ];
        soil_type_list = [
            { value: "Sandy Loam", text: "Sandy Loam" },
            { value: "Loam", text: "Loam" },
            { value: "Clay Loam", text: "Clay Loam" },
            { value: "Silt Loam", text: "Silt Loam" }
        ];
    } else if (crop_list === "cabbage") {
        growth_stage = [
            { value: "Early Growth", text: "Early Growth" },
            { value: "Vegetative", text: "Vegetative" },
            { value: "Cupping", text: "Cupping" },
            { value: "Transplant", text: "Transplant" }
        ];
        soil_type_list = [
            { value: "Sandy Loam", text: "Sandy Loam" },
            { value: "Loam", text: "Loam" },
            { value: "Clay Loam", text: "Clay Loam" },
            { value: "Silt Loam", text: "Silt Loam" }
        ];
    } else if (crop_list === "cotton") {
        growth_stage = [
            { value: "Seedling", text: "Seedling" },
            { value: "Squaring", text: "Squaring" },
            { value: "Flowering", text: "Flowering" },
            { value: "Boll Formation", text: "Boll Formation" }
        ];
        soil_type_list = [
            { value: "Sandy Loam", text: "Sandy Loam" },
            { value: "Loam", text: "Loam" },
            { value: "Clay", text: "Clay" },
            { value: "Silt Loam", text: "Silt Loam" }
        ];
    } else if (crop_list === "groundnut") {
        growth_stage = [
            { value: "Vegetative", text: "Vegetative" },
            { value: "Flowering and Pod Formation", text: "Flowering" },
            { value: "Maturity", text: "Maturity" }
        ];
        soil_type_list = [
            { value: "Sandy Loam", text: "Sandy Loam" },
            { value: "Loam", text: "Loam" },
            { value: "Sandy Clay Loam", text: "Sandy Clay Loam" }
        ];
    } else if (crop_list === "maize") {
        growth_stage = [
            { value: "Seedling", text: "Seedling" },
            { value: "Vegetative", text: "Vegetative" },
            { value: "Tasseling", text: "Tasseling" },
            { value: "Maturity", text: "Maturity" }
        ];
        soil_type_list = [
            { value: "Sandy", text: "Sandy" },
            { value: "Loam", text: "Loam" },
            { value: "Clay", text: "Clay" }
        ];
    } else if (crop_list === "onion") {
        growth_stage = [
            { value: "Germination", text: "Germination" },
            { value: "Bulbing", text: "Bulbing" },
            { value: "Maturity", text: "Maturity" },
            { value: "Harvest", text: "Harvest" }
        ];
        soil_type_list = [
            { value: "Sandy Loam", text: "Sandy Loam" },
            { value: "Silt Loam", text: "Silt Loam" },
            { value: "Loam", text: "Loam" },
            { value: "Clay", text: "Clay" }
        ];
    } else if (crop_list === "pepper") {
        growth_stage = [
            { value: "Seedling", text: "Seedling" },
            { value: "Vegetative", text: "Vegetative" },
            { value: "Flowering", text: "Flowering" },
            { value: "Fruiting", text: "Fruiting" }
        ];
        soil_type_list = [
            { value: "Sandy Loam", text: "Sandy Loam" },
            { value: "Silt Loam", text: "Silt Loam" },
            { value: "Loam", text: "Loam" },
            { value: "Clay Loam", text: "Clay Loam" }
        ];
    } else if (crop_list === "potato") {
        growth_stage = [
            { value: "Sprouting", text: "Sprouting" },
            { value: "Vegetative", text: "Vegetative" },
            { value: "Tuber", text: "Tuber Formation" },
            { value: "Tuber Bulking", text: "Tuber Bulking" }
        ];
        soil_type_list = [
            { value: "Sandy", text: "Sandy" },
            { value: "Silt", text: "Silt" },
            { value: "Loam", text: "Loam" },
            { value: "Clay Loam", text: "Clay Loam" }
        ];
    } else if (crop_list === "sugarcane") {
        growth_stage = [
            { value: "Germination", text: "Germination" },
            { value: "Tillering", text: "Tillering" },
            { value: "Grand Growth", text: "Grand Growth" },
            { value: "Maturity", text: "Maturity" }
        ];
        soil_type_list = [
            { value: "Sandy", text: "Sandy" },
            { value: "Silt", text: "Silt" },
            { value: "Loam", text: "Loam" },
            { value: "Clay Loam", text: "Clay Loam" }
        ];
    } else if (crop_list === "tomato") {
        growth_stage = [
            { value: "Seedling", text: "Seedling" },
            { value: "Flowering", text: "Flowering" },
            { value: "Fruit Development", text: "Fruit Development" },
            { value: "Maturity", text: "Maturity" }
        ];
        soil_type_list = [
            { value: "Sandy Loam", text: "Sandy Loam" },
            { value: "Silt Loam", text: "Silt Loam" },
            { value: "Loam", text: "Loam" },
            { value: "Clay", text: "Clay" }
        ];
    } else if (crop_list === "watermelon") {
        growth_stage = [
            { value: "Seedling", text: "Seedling" },
            { value: "Vegetative", text: "Vegetative" },
            { value: "Flowering", text: "Flowering" },
            { value: "Fruit Development", text: "Fruit Development" }
        ];
        soil_type_list = [
            { value: "Sandy Loam", text: "Sandy Loam" },
            { value: "Silt Loam", text: "Silt Loam" },
            { value: "Loam", text: "Loam" },
            { value: "Clay Loam", text: "Clay Loam" }
        ];
    } else if (crop_list === "wheat") {
        growth_stage = [
            { value: "Seedling", text: "Seedling" },
            { value: "Vegetative", text: "Vegetative" },
            { value: "Flowering", text: "Flowering" },
            { value: "Fruit Development", text: "Fruit Development" }
        ];
        soil_type_list = [
            { value: "Sandy Loam", text: "Sandy Loam" },
            { value: "Silt Loam", text: "Silt Loam" },
            { value: "Loam", text: "Loam" },
            { value: "Clay", text: "Clay" }
        ];
    }


    // Add default option to second and third dropdowns
    var defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "-- Select an Option --";

    growth_stage.appendChild(defaultOption);
    soil_type_list.appendChild(defaultOption.cloneNode(true));

    // Add options to second dropdown
    secondOptions.forEach(function(option) {
        var newOption = document.createElement("option");
        newOption.value = option.value;
        newOption.text = option.text;
        growth_stage.appendChild(newOption);
    });

    // Add options to third dropdown
    thirdOptions.forEach(function(option) {
        var newOption = document.createElement("option");
        newOption.value = option.value;
        newOption.text = option.text;
        soil_type_list.appendChild(newOption);
    });
}