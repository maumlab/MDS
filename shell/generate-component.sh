# Set the component name
COMPONENT_NAME=$1

cd src/components

# Create the directory
mkdir $COMPONENT_NAME

# Change into the new directory
cd $COMPONENT_NAME

# Create the files
touch index.ts ${COMPONENT_NAME}.tsx ${COMPONENT_NAME}.style.ts ${COMPONENT_NAME}.type.ts ${COMPONENT_NAME}.stories.tsx

echo "Component $COMPONENT_NAME created successfully with the following files:"
echo "index.ts"
echo "${COMPONENT_NAME}.tsx"
echo "${COMPONENT_NAME}.style.ts"
echo "${COMPONENT_NAME}.type.ts"
echo "${COMPONENT_NAME}.stories.tsx"