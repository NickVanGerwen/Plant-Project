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
RUN dotnet restore "back-end/Plant-Project-Backend/Plant-Project-Backend/Plant-Project-Backend.csproj"
COPY . .
WORKDIR "/src/back-end/Plant-Project-Backend/Plant-Project-Backend"
RUN dotnet build "Plant-Project-Backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Plant-Project-Backend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Plant-Project-Backend.dll"]
