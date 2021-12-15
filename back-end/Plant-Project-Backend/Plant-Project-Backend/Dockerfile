#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR "/src/Plant-Project-Backend"

COPY ["Plant-Project-Backend.csproj", "Plant-Project-Backend/"]
RUN dotnet restore "Plant-Project-Backend/Plant-Project-Backend.csproj"
COPY . .
RUN dotnet build "Plant-Project-Backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Plant-Project-Backend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Plant-Project-Backend.dll"]