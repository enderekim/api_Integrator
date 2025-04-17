# Use the official .NET SDK image for building the application
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Copy the project file and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy the rest of the application files
COPY . ./
RUN dotnet publish -c Release -o out

# Use the runtime image for running the application
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/out .

# Expose the port your API runs on
EXPOSE 5005
EXPOSE 443

# Set environment variables
ENV ASPNETCORE_URLS=http://0.0.0.0:5005

# Start the application
ENTRYPOINT ["dotnet", "ParameterAPI.dll"]
