# #See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

ENV ASPNETCORE_ENVIRONMENT=Development

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR "/src"
COPY ["back-end/Plant-Project-Backend/Plant-Project-Backend/Plant-Project-Backend.csproj", "back-end/Plant-Project-Backend/Plant-Project-Backend/"]
COPY ["back-end/Plant-Project-Backend/DBContext/DBContext.csproj", "back-end/Plant-Project-Backend/DBContext/"]
COPY ["back-end/Plant-Project-Backend/Logic/Logic.csproj", "back-end/Plant-Project-Backend/Logic/"]
RUN dotnet restore "back-end/Plant-Project-Backend/Plant-Project-Backend.csproj"
COPY . .
WORKDIR "/src/back-end/Plant-Project-Backend/Plant-Project-Backend"
RUN dotnet build "Plant-Project-Backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Plant-Project-Backend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Plant-Project-Backend.dll"]

# 


# COPY ["Auth_Backend/Auth_Backend.csproj", "Auth_Backend/"]
# COPY ["Auth_Backend.DALInterface/Auth_Backend.DALInterface.csproj", "Auth_Backend.DALInterface/"]
# COPY ["Auth_Backend.Enum/Auth_Backend.Enum.csproj", "Auth_Backend.Enum/"]
# COPY ["Auth_Backend.DTO/Auth_Backend.DTO.csproj", "Auth_Backend.DTO/"]
# COPY ["Auth_Backend.Logic/Auth_Backend.Logic.csproj", "Auth_Backend.Logic/"]
# COPY ["Auth_Backend.LogicInterface/Auth_Backend.LogicInterface.csproj", "Auth_Backend.LogicInterface/"]
# COPY ["Auth_Backend.DAL/Auth_Backend.DAL.csproj", "Auth_Backend.DAL/"]
# RUN dotnet restore "Auth_Backend/Auth_Backend.csproj"
# COPY . .
# WORKDIR "/src/Auth_Backend"
# RUN dotnet build "Auth_Backend.csproj" -c Release -o /app/build

# FROM build AS publish
# RUN dotnet publish "Auth_Backend.csproj" -c Release -o /app/publish

# FROM base AS final
# WORKDIR /app
# COPY --from=publish /app/publish .
# ENTRYPOINT ["dotnet", "Auth_Backend.dll"]