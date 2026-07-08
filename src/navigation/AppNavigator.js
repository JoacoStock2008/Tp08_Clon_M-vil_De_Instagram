import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text } from "react-native"
import HomeView from "../views/HomeView"
import SearchView from "../views/SearchView"
import CreatePostView from "../views/CreatePostView"
import ActivityView from "../views/ActivityView"
import ProfileView from "../views/ProfileView"

const Tab = createBottomTabNavigator()

function AppNavigator() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarStyle: {
						backgroundColor: "#111327",
						borderTopColor: "#252840",
						height: 64,
						paddingTop: 8,
					},
					tabBarActiveTintColor: "#ffffff",
					tabBarInactiveTintColor: "#6b6f82",
					tabBarLabelStyle: {
						fontSize: 11,
						fontWeight: "700",
						paddingBottom: 6,
					},
					tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>{getTabIcon(route.name)}</Text>,
				})}
			>
				<Tab.Screen name="Home" component={HomeView} />
				<Tab.Screen name="Search" component={SearchView} />
				<Tab.Screen name="Create" component={CreatePostView} />
				<Tab.Screen name="Activity" component={ActivityView} />
				<Tab.Screen name="Profile" component={ProfileView} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}

function getTabIcon(routeName) {
	if (routeName == "Home") return "⌂"
	if (routeName == "Search") return "◎"
	if (routeName == "Create") return "+"
	if (routeName == "Activity") return "♡"
	if (routeName == "Profile") return "👤"
	return "•"
}

export default AppNavigator
