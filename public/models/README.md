# 3D Models Directory

## Setup Instructions

Place your GLTF 3D model files in this directory.

### Expected Files:
- `model.gltf` - Your main GLTF model file
- `model.bin` - Binary data file (if your GLTF uses external binary)
- Any texture files (.png, .jpg, etc.) referenced by the model

### Current Configuration:
The hero section is set up to load: `/models/model.gltf`

### To Use Your Model:
1. Place your `.gltf` file in this directory
2. Place your `.bin` file (if separate) in this directory
3. Place any texture files in this directory
4. If your model has a different name, update the path in `HeroSection.tsx`:
   ```tsx
   modelPath="/models/your-model-name.gltf"
   ```

### Customization Options (in HeroSection.tsx):
- `enableControls` - Allow mouse orbit controls (default: true)
- `autoRotate` - Auto-rotate the model (default: true)
- `rotationSpeed` - Speed of rotation (default: 0.003)
- `cameraPosition` - Camera position [x, y, z] (default: [0, 0, 5])
- `modelScale` - Scale of the model (default: 1)
- `modelPosition` - Position [x, y, z] (default: [0, 0, 0])
- `ambientIntensity` - Ambient light intensity (default: 0.6)

### Tips:
- If the model is too small/large, adjust `modelScale`
- If the model is off-center, adjust `modelPosition`
- If the camera is too close/far, adjust `cameraPosition`
- The model will render on top of the black hole backgrounds with interactive controls
